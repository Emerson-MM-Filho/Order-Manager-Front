import './sectionTitle.css'

function sectionTitle({title}) {

  const newDate = new Date()
  const allMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const day = newDate.getDate()
  const month = allMonths[newDate.getMonth()]
  const year = newDate.getFullYear()
  const fullDate = day + ' de ' + month + ' de ' + year

  return (
    <div className="titleContainer">
      <h3>{title}</h3>
      <p>{fullDate}</p>
    </div>
  )
}

export default sectionTitle