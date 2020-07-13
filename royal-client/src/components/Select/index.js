import React, { useEffect, useState } from 'react'

import './styles.css'

export default function Select(props) {

  const [selectedItem, setSelectedItem] = useState({})

  
  useEffect(() => {
    
    const handleSelectedItem = event => setSelectedItem(props.items.filter(item => item.id === parseInt(event.target.id))[0])

    let x, i, j, l, ll, selElmnt, b, c

    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName(`custom-select`)
    l = x.length
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName(`select`)[0]
      ll = selElmnt.length
      
      /*for each element, create a new DIV that will act as the selected item:*/
      const div = document.createElement(`DIV`)
      div.setAttribute(`class`, `select-selected`)
      div.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
      
      // remove o item caso já exista devido as multiplas renderizações do react
      const items = [...x[i].children].filter(node => node.nodeName.toUpperCase() === div.nodeName.toUpperCase())
      if(items.length > 1) {
        x[i].removeChild(items[0])
        x[i].removeChild(items[1])
      }
      x[i].appendChild(div)

      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement(`DIV`)
      b.setAttribute(`class`, `select-items select-hide`)
      for (j = 1; j < ll; j++) {

        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement(`DIV`)
        c.id = selElmnt.options[j].value
        c.innerHTML = selElmnt.options[j].innerHTML
        c.addEventListener(`click`, function(e) {
          handleSelectedItem(e)
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          let y, i, k, s, h, sl, yl
          s = this.parentNode.parentNode.getElementsByTagName(`select`)[0]
          sl = s.length
          h = this.parentNode.previousSibling
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML === this.innerHTML) {
              s.selectedIndex = i
              h.innerHTML = this.innerHTML
              y = this.parentNode.getElementsByClassName(`same-as-selected`)
              yl = y.length
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute(`class`)
              }
              this.setAttribute(`class`, `same-as-selected`)
              break
            }
          }
          h.click()
        })
        b.appendChild(c)
      }
      x[i].appendChild(b)
      div.addEventListener(`click`, function(e) {

        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation()
        closeAllSelect(this)
        this.nextSibling.classList.toggle(`select-hide`)
        this.classList.toggle(`select-arrow-active`)
      })
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      let x, y, i, xl, yl, arrNo = []
      x = document.getElementsByClassName(`select-items`)
      y = document.getElementsByClassName(`select-selected`)
      xl = x.length
      yl = y.length
      for(i = 0; i < yl; i++) elmnt === y[i] ? arrNo.push(i) : y[i].classList.remove(`select-arrow-active`)
      for(i = 0; i < xl; i++) if(arrNo.indexOf(i)) x[i].classList.add(`select-hide`)
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener(`click`, closeAllSelect)
  }, [props.items])

  return (
    <div className="custom-select">
      <select>
        <option value="0">Selecione...</option>
        { props.items.map(item => <option key={item.id} value={item.id}>{item.description}</option>) }
      </select>
    </div>
  )
}
