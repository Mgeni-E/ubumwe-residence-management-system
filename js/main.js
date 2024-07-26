
// sidebar
document.querySelectorAll('aside nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('hidden');
        });
        document.querySelector(link.getAttribute('href')).classList.remove('hidden');
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebarMen = document.getElementById('sidebar-menu');
    sidebarMenu.classList.toggle('hidden');
  });

// Fetch and display room management data
function loadRoomManagementData() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#room-management tbody');
        data.rooms.forEach(room => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${room.studentName}</td>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${room.roomNumber}</td>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${room.roomType}</td>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${room.status}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching room management data:', error));
  }
  
  
  // Fetch and display maintenance requests data
  function loadMaintenanceRequestsData() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#request-list');
        data.requests.forEach(request => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${request.date}</td>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${request.roomNumber}</td>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${request.description}</td>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">${request.status}</td>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">
              <button class="bg-green-500 text-white px-4 py-2 rounded">Accept</button>
              <button class="bg-red-500 text-white px-4 py-2 rounded ml-2">Reject</button>
            </td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching maintenance requests data:', error));
  }
  
  // Fetch and display notifications data
function loadNotificationsData() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const notificationList = document.querySelector('#notification-list');
        data.notifications.forEach(notification => {
          const notificationElement = document.createElement('div');
          notificationElement.className = `p-4 border-l-4 ${notification.type === 'alert' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-green-100 border-green-500 text-green-700'}`;
          notificationElement.setAttribute('role', 'alert');
          notificationElement.innerHTML = `
            <p class="font-bold">${notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}</p>
            <p>${notification.message}</p>
          `;
          notificationList.appendChild(notificationElement);
        });
      })
      .catch(error => console.error('Error fetching notifications data:', error));
  }