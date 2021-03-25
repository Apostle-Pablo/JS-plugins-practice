$.confirm = function(options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      width: '400px',
      closebal: false,
      content: options.modalcontent,
      onClose() {
        modal.destroy()
      },
      footerButtons: [
         {textContent:'Отменить', type:'secondary', handler() {
         modal.close()
         reject()
         }},
         {textContent:'Удалить', type:'danger', handler() {
         modal.close()
         resolve()
         }},
            ]
      
    })
    setTimeout(() =>  modal.open(), 200)
  })
}