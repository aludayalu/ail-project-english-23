try {
    const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                setTimeout(()=>{
                    entry.target.classList.add('show')
                }, 500)
            }
        })
    })
    
    const hiddenelements=document.querySelectorAll('.hidden')
    hiddenelements.forEach((el)=>{observer.observe(el)})
} catch {}