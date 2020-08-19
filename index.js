window.addEventListener("DOMContentLoaded", function(){
    let form = document.forms[1];

    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log(
            {
                date: form.date.value,
                category: form.category.value,
                description: form.description.value,
                amount: form.amount.value 
            }
        )
        form.reset();
    })
})