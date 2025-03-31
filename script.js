let mensajeAEnviar
document.querySelector('input').addEventListener('input', (e)=>{
    mensajeAEnviar=e.target.value
    document.querySelector('a').href=`https://wa.me/5355113992?text=${mensajeAEnviar}`
})
