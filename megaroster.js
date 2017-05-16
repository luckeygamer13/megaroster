const form = document.querySelector('form')

//roster.appendChild(listNames)

const roster = document.querySelector('.roster')

    const table = document.createElement('table')
    roster.appendChild(table)
    const row1 = document.createElement('tr')
    table.appendChild(row1)
    
    const spc = document.createElement('th')
    spc.className = "promote"
    row1.appendChild(spc)

    const title = document.createElement('th')
    title.textContent = 'First Name'
    row1.appendChild(title)

    const title2 = document.createElement('th')
    title2.textContent = 'Last Name'
    row1.appendChild(title2)

    const spc2 = document.createElement('th')
    spc2.className = "promote"
    row1.appendChild(spc2)


const addPerson = (ev) => {
    ev.preventDefault()
    const field = ev.target
    const roster = document.querySelector('.roster')

    const row2 = document.createElement('tr')
    table.appendChild(row2)

    table.insertBefore(row2, table.childNodes[1])

    const spc1 = document.createElement('td')
    row2.appendChild(spc1)

    const frst = document.createElement('td')
    frst.textContent = field.first.value
    row2.appendChild(frst)

    const lst = document.createElement('td')
    lst.textContent = field.last.value
    row2.appendChild(lst)

    const spc2 = document.createElement('td')
    row2.appendChild(spc2)

    const promote = document.createElement('button')
    promote.textContent = 'PROMOTE'
    promote.style.backgroundColor = 'blue'
    promote.style.color = 'white'
    spc1.appendChild(promote)

    const remove = document.createElement('button')
    remove.textContent = 'REMOVE'
    remove.style.backgroundColor = 'red'
    remove.style.color = 'white'
    spc2.appendChild(remove)

    function highlight(){
    this.parentNode.parentNode.style.backgroundColor = 'yellow'
}

    function bye(){
    this.parentNode.parentNode.remove()
    }

    remove.addEventListener('click', bye)
    promote.addEventListener('click', highlight)
}



form.addEventListener('submit', addPerson)
