function updateDateTime() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const watTime = now.toLocaleString('en-UK', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const dayOfWeek = now.toLocaleString('en-UK', { weekday: 'long', timeZone: 'Africa/Lagos' });


    currentTimeUTC.textContent = watTime;
    currentDay.textContent = dayOfWeek;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateDateTime();
    setInterval(updateDateTime, 60000);
})