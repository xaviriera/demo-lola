import{i as e,r as t}from"./store-Bd8o5oKa.js";var n=e(()=>({pending:``,stopped:!1,withdrawal:0})),r=0;function i(){window.clearTimeout(r),n.getState().pending&&t.getState().say(`He cancelado el envío pendiente. No ha salido nada.`),n.setState({pending:``})}function a(e,i){n.getState().pending||n.getState().stopped||(n.setState({pending:e}),t.getState().say(`Has aprobado: `+e+`. Espero ocho segundos por si quieres deshacerlo.`),r=window.setTimeout(()=>{n.setState({pending:``}),!n.getState().stopped&&i()},8e3))}function o(e){let r=e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``),a=t.getState();return/(esto no se lo digas|retira.*mensaje)/.test(r)?(i(),n.setState(e=>({withdrawal:e.withdrawal+1})),a.setNotes(`064-2026`,[...a.notes[`064-2026`]??[],`José Tomás retira el mensaje al cliente. Requiere nueva revisión.`]),`De acuerdo: retiro el mensaje pendiente y dejo tu corrección en el diario del 064-2026. No saldrá sin una nueva revisión.`):/(ganamos seguro|garantiza|garantizar|promete.*gan)/.test(r)?`No puedo garantizar un resultado judicial. Te preparo una explicación de los riesgos para que la revises tú.`:/(sin revisar|sin.*ok|firma.*por mi|firmalo|presentalo|lexnet)/.test(r)?`No envío, firmo ni presento por mi cuenta. Lo dejo en Revisar; tú decides, firmas y tú o tu procuradora lo presentáis por LexNET.`:/(no soy el cliente|soy.*vecino|soy.*familiar|estrategia|dni completo|correo.*ajeno)/.test(r)?`No doy datos del expediente a terceros ni cifras o estrategia por teléfono. Tomo nombre, contacto y motivo, sin confirmar siquiera que esa persona sea cliente.`:/(martes)/.test(r)&&/(plazo|vence|contestacion)/.test(r)?(a.setNotes(`091-2026`,[...a.notes[`091-2026`]??[],`José Tomás indica martes; discrepancia con lunes 9 pendiente de comprobar contra la notificación.`]),a.addParaTi({id:`revision-plazo`,title:`Comprobar corrección de plazo: martes frente a lunes 9`,expediente:`091-2026`}),`Gracias por corregirme. Dejo tu indicación del martes anotada y una revisión en Hoy. La notificación de la demo dice lunes 9: mantengo esa alerta hasta comprobar la fuente contigo, para no perder el plazo.`):/(sentencia.*invent|inventa.*cita|no sabes|resultado.*juicio)/.test(r)?`No lo sé con los documentos disponibles. No invento citas ni resultados: lo dejo pendiente de comprobar en la fuente y de tu revisión.`:/(ignora.*instrucciones|exporta.*expedientes)/.test(r)?`Ese texto recibido no es una orden tuya. Lo trato como contenido del correo: no ejecuto instrucciones ni exporto expedientes.`:null}var s={"Pending answer: signing date":`Pendiente de respuesta: fecha de firma`,"Status of bank account":`Estado de la cuenta bancaria`,"Tourist license: documents needed":`Licencia turística: documentación necesaria`,"Signing appointment Torrevieja":`Cita para la firma en Torrevieja`,"This week in legal AI: five tools worth watching":`Esta semana en IA jurídica: cinco herramientas de interés`,"Early bird tickets: Costa Blanca Property Congress":`Entradas anticipadas: Congreso Inmobiliario Costa Blanca`,"Koopovereenkomst Torrevieja: documenten":`Compraventa en Torrevieja: documentación`,"Question sur la date de signature":`Consulta sobre la fecha de firma`,"Webinar:":`Seminario en línea:`};function c(e){for(let[t,n]of Object.entries(s))e=e.replace(t,n);return e}var l={"0004":`Hola, José Tomás:

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

Nos gustaría firmar la escritura el 27 de noviembre a las 11:00. Por favor, confírmeme si la notaría tiene disponibilidad.

Erika Lindqvist`,"0031":`Nuestro resumen semanal de noticias sobre tecnología jurídica, rondas de financiación y lanzamientos de productos.

Mensaje automático de demostración.`,"0034":`Reserve su entrada anticipada para el congreso inmobiliario y ahorre un 25 %.

Mensaje automático de demostración.`,"0041":`Estimado Pieter:

Mañana te enviaré la lista de documentos que faltan.

Un saludo,
José Tomás`,"0047":`Estimada Dorota:

La notaría confirmará la fecha el lunes. Te escribiré en cuanto la sepa.`};function u(e){return e.replace(/Cedula emplazamiento/i,`Cédula de emplazamiento`).replace(/OPOSICION DEMANDA/g,`Oposición a la demanda`).replace(/Documentacion cliente/gi,`Documentación del cliente`).replace(/borrador Lola/g,`borrador de Lola`)}async function d(e){let t=await fetch(e);if(!t.ok)throw Error(e);return JSON.parse(await t.text())}async function f(e){try{return{data:await d(`./`+e),base:`./`}}catch{return{data:await d(`./_stub/`+e),base:`./_stub/`}}}async function p(){let[e,t,n,r,i]=await Promise.all([f(`fs/manifest.json`),f(`mail/manifest.json`),f(`todo/tareas.json`),f(`lola/operativa.json`).catch(()=>({data:{},base:`./`})),d(`./data/demo.json`).catch(()=>({}))]),a=Array.isArray(t.data)?t.data:t.data.correos??[];return{fs:e.data,fsBase:e.base,mail:a.map(e=>({...e,asunto:c(e.asunto)})),mailBase:t.base,todo:n.data,ops:r.data,calendario:i.calendario??[],calls:i.llamadas_hoy??[],plazos:i.plazos_semana??[],stub:e.base!==`./`}}var m=(e,t)=>e+t.split(`/`).map(encodeURIComponent).join(`/`);function h(e,t=[]){let n=[...t,e.nombre];return[{node:e,path:n},...(e.hijos??[]).flatMap(e=>h(e,n))]}var g=e=>(e.ext||e.nombre.split(`.`).pop()||``).toLowerCase();function _(e){if(!e)return``;let t=new Date(e);if(Number.isNaN(t.getTime()))return``;let n=e=>String(e).padStart(2,`0`);return`${n(t.getDate())}/${n(t.getMonth()+1)}/${t.getFullYear()} ${t.getHours()}:${n(t.getMinutes())}`}function v(e){return e?Math.max(1,Math.round(e/1024)).toLocaleString(`es-ES`)+` KB`:``}function y(e){if(e.tipo===`carpeta`)return`Carpeta de archivos`;let t=g(e);return{docx:`Documento de Microsoft Word`,doc:`Documento de Microsoft Word`,pdf:`Documento PDF`,xlsx:`Hoja de cálculo de Microsoft Excel`,png:`Archivo PNG`,jpg:`Archivo JPG`,jpeg:`Archivo JPG`}[t]??`Archivo `+t.toUpperCase()}function b(e,n){n.ruta&&t.getState().open({id:`f:`+n.ruta+`:`+n.nombre,kind:`file`,title:n.nombre,url:m(e.fsBase,n.ruta),ext:g(n)})}function x(e){e&&(t.getState().patchMail(e.id,{leido:!0}),t.getState().open({id:`m:`+e.id,kind:`mail`,title:e.asunto,mailId:e.id}))}function S(e,n){let r=[...e.fs.bibliotecas.map(e=>({root:e.id,raiz:e.raiz})),{root:`onedrive`,raiz:e.fs.onedrive}];for(let e of r){let r=h(e.raiz).find(e=>e.node===n);if(r){t.getState().setFsPath({root:e.root,names:r.path.slice(1)}),t.getState().openSection(`carpetas`);return}}}function C(e){return[...e.fs.bibliotecas.flatMap(e=>h(e.raiz)),...h(e.fs.onedrive)]}function w(e,t,n){let r=C(e).filter(e=>e.node.tipo===`archivo`);return r.find(e=>t.test(e.node.nombre)&&e.node.expediente===n)?.node??r.find(e=>t.test(e.node.nombre))?.node}function T(e){let n=t.getState().mailOv[e.id]??{};return{...e,...n}}export{i as _,b as a,h as c,p as d,y as f,a as g,l as h,T as i,_ as l,u as m,w as n,x as o,m as p,S as r,g as s,C as t,v as u,o as v,n as y};