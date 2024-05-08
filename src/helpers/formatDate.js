export const formatDate = date => {
    const newDate = new Date(date.split('T')[0].split('-'))
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }
    return newDate.toLocaleDateString('en-US', options)
}

export const idGenerator = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}