const monthNames = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June',
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
];

export const longFormat = (d) => {
  const date = new Date(d)
  
  return [
    date.getDate(),
    monthNames[date.getMonth()],
    date.getFullYear()
  ].join(' ');
}
