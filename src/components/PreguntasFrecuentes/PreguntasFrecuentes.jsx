import React from 'react'
import "./style.css"

function PreguntasFrecuentes() {
  return (
    <> 
    <h2 className="tituloPreguntas">Preguntas Frecuentes</h2>
   <div className="container overflow-hidden text-center">
  <div className="row gy-5">
    <div className="col-6">
          <div className="p-3">¿Cómo sé qué tipo de masaje es mejor para mí?</div>
      <p className="texto">Esto depende de tus necesidades específicas. Si estás buscando aliviar el dolor muscular o una tensión crónica, entonces un masaje descontracturante sería una mejor opción. Si buscas relajarte y disfrutar de un masaje para tus músculos, entonces un masaje relajante sería una mejor opción. Si estás en duda, consulta a un profesional para obtener la mejor recomendación.</p>
    </div>
    <div className="col-6">
      <div className="p-3">¿Qué productos utilizan en las sesiones de masajes?</div>
      <p className="texto">Los productos que se utilizan en las sesiones de masajes dependen de los objetivos buscados y tipo de masaje. Los aceites esenciales se utilizan por a sus propiedades curativas y relajantes. Otros productos que se pueden utilizar son cremas y geles, envolturas calientes o frías, toallas térmicas y almohadas para masajes.</p>
    </div>
    <div className="col-6">
      <div className="p-3">¿Cuánto dura el lifting de pestañas?</div>
      <p className="texto">La duración depende mucho del ciclo de crecimiento de tu pelo. El mismo está determinado por factores y hábitos que varían según la persona. Factores como el cuidado y peinado de las pestañas también van a favorecer que el resultado dure mucho más tiempo. 
El tiempo estimado es de 4 a 8 semanas.</p>
    </div>
    <div className="col-6">
      <div className="p-3">¿Cuánto dura el laminado de cejas?</div>
      <p className="texto">La duración depende mucho del ciclo de crecimiento de tu pelo. El mismo está determinado por factores y hábitos que varían según la persona. Factores como el cuidado y peinado de las pestañas también van a favorecer que el resultado dure mucho más tiempo. 
El tiempo estimado es de 2 a 6 semanas.</p>
    </div>
    <div className="col-6">
      <div className="p-3">¿Qué métodos de pago aceptan?</div>
      <p className="texto">Aceptamos todos los medios de pago, efectivo, transferencia, tarjeta de crédito y débito.</p>
    </div>
    <div className="col-6">
      <div className="p-3">¿Qué debo tener en cuenta antes de asistir a mi turno?</div>
      <p className="texto">No aplicar maquillajes, cremas o aceites en la zona a tratar 24 hs antes del turno.</p>
    </div>
  </div>
</div>

  </>
  )
}

export default PreguntasFrecuentes



