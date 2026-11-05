import{r as e}from"./store-c4478rId.js";var t={"Pending answer: signing date":`Pendiente de respuesta: fecha de firma`,"Status of bank account":`Estado de la cuenta bancaria`,"Tourist license: documents needed":`Licencia turística: documentación necesaria`,"Signing appointment Torrevieja":`Cita para la firma en Torrevieja`,"This week in legal AI: five tools worth watching":`Esta semana en IA jurídica: cinco herramientas de interés`,"Early bird tickets: Costa Blanca Property Congress":`Entradas anticipadas: Congreso Inmobiliario Costa Blanca`,"Koopovereenkomst Torrevieja: documenten":`Compraventa en Torrevieja: documentación`,"Question sur la date de signature":`Consulta sobre la fecha de firma`,"Webinar:":`Seminario en línea:`};function n(e){for(let[n,r]of Object.entries(t))e=e.replace(n,r);return e}var r={"0004":`Hola, José Tomás:

¿Podrías decirme si ya está abierta la cuenta bancaria española para la compra? El agente del vendedor sigue pidiendo los datos de la transferencia y no quiero retrasar la señal.

Un saludo,
Lisa Harris`,"0009":`Estimado José Tomás:

Sigo esperando la fecha de firma en la notaría. Debo reservar pronto mi vuelo desde Gdańsk. ¿Podría confirmármela esta semana?

Un saludo,
Dorota Kowalska`,"0012":`Estimado José Tomás:

Adjunto los documentos para la compraventa del apartamento de Torrevieja. ¿Puede confirmar que está todo completo?

Un saludo,
Ruud Vermeulen`,"0013":`Estimado José Tomás:

¿Podrías enviarnos la lista de documentos que faltan para la licencia turística de los apartamentos? El ayuntamiento nos ha dado diez días para completar el expediente.

Pieter Hoffmann`,"0016":`Estimado letrado:

¿Podría indicarme la fecha prevista para la firma en la notaría? Tengo que organizar mi viaje desde Lyon.

Un saludo,
Philippe Renaud`,"0021":`Hola:

Nos gustaría firmar la escritura el 25 de noviembre a las 11:00. Por favor, confírmeme si la notaría tiene disponibilidad.

Erika Lindqvist`,"0031":`Nuestro resumen semanal de noticias sobre tecnología jurídica, rondas de financiación y lanzamientos de productos.

Mensaje automático de demostración.`,"0034":`Reserve su entrada anticipada para el congreso inmobiliario y ahorre un 25 %.

Mensaje automático de demostración.`,"0041":`Estimado Pieter:

Mañana te enviaré la lista de documentos que faltan.

Un saludo,
José Tomás`,"0047":`Estimada Dorota:

La notaría confirmará la fecha el jueves. Te escribiré en cuanto la sepa.`};function i(e){return e.replace(/Cedula emplazamiento/i,`Cédula de emplazamiento`).replace(/OPOSICION DEMANDA/g,`Oposición a la demanda`).replace(/Documentacion cliente/gi,`Documentación del cliente`).replace(/borrador Lola/g,`borrador de Lola`)}async function a(e){let t=await fetch(e);if(!t.ok)throw Error(e);return JSON.parse(await t.text())}async function o(e){try{return{data:await a(`./`+e),base:`./`}}catch{return{data:await a(`./_stub/`+e),base:`./_stub/`}}}async function s(){let[e,t,r,i,s]=await Promise.all([o(`fs/manifest.json`),o(`mail/manifest.json`),o(`todo/tareas.json`),o(`lola/operativa.json`).catch(()=>({data:{},base:`./`})),a(`./data/demo.json`).catch(()=>({}))]),c=Array.isArray(t.data)?t.data:t.data.correos??[];return{fs:e.data,fsBase:e.base,mail:c.map(e=>({...e,asunto:n(e.asunto)})),mailBase:t.base,todo:r.data,ops:i.data,calendario:s.calendario??[],calls:s.llamadas_hoy??[],plazos:s.plazos_semana??[],stub:e.base!==`./`}}var c=(e,t)=>e+t.split(`/`).map(encodeURIComponent).join(`/`);function l(e,t=[]){let n=[...t,e.nombre];return[{node:e,path:n},...(e.hijos??[]).flatMap(e=>l(e,n))]}var u=e=>(e.ext||e.nombre.split(`.`).pop()||``).toLowerCase();function d(e){if(!e)return``;let t=new Date(e);if(Number.isNaN(t.getTime()))return``;let n=e=>String(e).padStart(2,`0`);return`${n(t.getDate())}/${n(t.getMonth()+1)}/${t.getFullYear()} ${t.getHours()}:${n(t.getMinutes())}`}function f(e){return e?Math.max(1,Math.round(e/1024)).toLocaleString(`es-ES`)+` KB`:``}function p(e){if(e.tipo===`carpeta`)return`Carpeta de archivos`;let t=u(e);return{docx:`Documento de Microsoft Word`,doc:`Documento de Microsoft Word`,pdf:`Documento PDF`,xlsx:`Hoja de cálculo de Microsoft Excel`,png:`Archivo PNG`,jpg:`Archivo JPG`,jpeg:`Archivo JPG`}[t]??`Archivo `+t.toUpperCase()}function m(t,n){n.ruta&&e.getState().open({id:`f:`+n.ruta+`:`+n.nombre,kind:`file`,title:n.nombre,url:c(t.fsBase,n.ruta),ext:u(n)})}function h(t){t&&(e.getState().patchMail(t.id,{leido:!0}),e.getState().open({id:`m:`+t.id,kind:`mail`,title:t.asunto,mailId:t.id}))}function g(t,n){let r=[...t.fs.bibliotecas.map(e=>({root:e.id,raiz:e.raiz})),{root:`onedrive`,raiz:t.fs.onedrive}];for(let t of r){let r=l(t.raiz).find(e=>e.node===n);if(r){e.getState().setFsPath({root:t.root,names:r.path.slice(1)}),e.getState().openSection(`carpetas`);return}}}function _(e){return[...e.fs.bibliotecas.flatMap(e=>l(e.raiz)),...l(e.fs.onedrive)]}function v(e,t,n){let r=_(e).filter(e=>e.node.tipo===`archivo`);return r.find(e=>t.test(e.node.nombre)&&e.node.expediente===n)?.node??r.find(e=>t.test(e.node.nombre))?.node}function y(t){let n=e.getState().mailOv[t.id]??{};return{...t,...n}}export{m as a,l as c,s as d,p as f,r as h,y as i,d as l,i as m,v as n,h as o,c as p,g as r,u as s,_ as t,f as u};