export function mv() {
  const mvList = document.querySelectorAll("#mv li");

  mvList.forEach((li) => {
    li.addEventListener("click", () => {
      const onChoice = li.classList.contains('on') 
      mvList.forEach(i => i.classList.remove('on'));
      
      if(!onChoice){
        li.classList.add('on'); 
      } 
    });
  });
}