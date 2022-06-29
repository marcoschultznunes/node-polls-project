const deleteNotificationBtn = document.getElementById('delete-notification-btn')

const deleteParent = (e) => {
    e.preventDefault()
    console.log(e.target)
    e.target.parentElement.remove()
}

deleteNotificationBtn.addEventListener('click', deleteParent)
