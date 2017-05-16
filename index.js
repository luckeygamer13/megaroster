const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  colorDiv.style.backgroundColor = hairColor
  return colorDiv
}


const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const ul = document.createElement("ul")                       // Create a <p> element
  ul.textContent = "Sumbission Details"       // Create a text node                                         // Append the text to <p>
  details.appendChild(ul)                              // Append <p> to <body>

  const labels = document.getElementsByTagName("label")
  
  for (let i = 0; i < form.length - 1; i++){
      let list = document.createElement('li')
      list.innerHTML = labels[i].innerHTML + ': ' + form[i].value
      ul.appendChild(list)
  }
}

personForm.addEventListener('submit', handleSubmit)