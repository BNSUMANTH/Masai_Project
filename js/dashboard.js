 import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabase = createClient(
  'https://rxjgcgpyspmdghkbawso.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4amdjZ3B5c3BtZGdoa2Jhd3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMzIzNjYsImV4cCI6MjA2MTkwODM2Nn0.9nbgvoKXzKuPDzf4OB5qT7ckAQ9bBc_v07uOKZZoi4w'
);

const form = document.getElementById('capsuleForm');
const capsuleList = document.getElementById('capsules');
const logoutBtn = document.getElementById('logoutBtn');
async function uploadFile(file) {
  const filename = `anonymous/${Date.now()}-${file.name}`;  
  const { data, error } = await supabase.storage
    .from('capsules')
    .upload(filename, file);
    
  if (error) {
    console.error('Upload error:', error.message);
    return null;
  }
  return data.path;
}
async function createCapsule(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const message = document.getElementById('message').value;
  const unlockDate = document.getElementById('unlockDate').value;
  const file = document.getElementById('mediaFile').files[0];
  // const user_id=;
  console.log(file);
  let filePath = null;
  if (file) {
    filePath = await uploadFile(file);
  }

  const { error } = await supabase
    .from('capsules')
    .insert([{
      user_id: null,  
      title,
      message,
      unlock_date: unlockDate,
      file_path: filePath,
      locked: true  
    }]);

  if (error) {
    alert('Error creating capsule: ' + error.message);
  } else {
    alert('Capsule created successfully!');
    form.reset();
    loadCapsules();
  }
}

async function loadCapsules() {
  const { data, error } = await supabase
    .from('capsules')
    .select('*')
    .order('unlock_date', { ascending: true });

  capsuleList.innerHTML = '';

  if (error) {
    console.error('Error loading capsules:', error.message);
    return;
  }

  data.forEach(capsule => {
    const li = document.createElement('li');
    let fileLink = '';
    if (capsule.file_path) {
      const { data: urlData } = supabase.storage
        .from('capsules')
        .getPublicUrl(capsule.file_path);
      fileLink = `<a href="${urlData.publicUrl}" target="_blank">View File</a>`;
    }

    li.innerHTML = `
      <strong>${capsule.title}</strong><br>
      <em>${capsule.message}</em><br>
      Unlocks on: ${capsule.unlock_date}<br>
      ${fileLink}
    `;
    capsuleList.appendChild(li);
  });
}

logoutBtn.addEventListener('click', async () => {
  await supabase.auth.signOut();
  window.location.href = '../index.html'; 
});

form.addEventListener('submit', createCapsule);

loadCapsules();
