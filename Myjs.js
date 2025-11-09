const Students = [



    { StudentsID: '101', Name: "Ahmed", Phone: '123-456-789', Major: 'SE' },
    { StudentsID: '102', Name: "Abdulaziz", Phone: '980-456-789', Major: 'NES' },
    { StudentsID: '103', Name: "Khalid", Phone: '749-456-789', Major: 'SE' },
    { StudentsID: '104', Name: "Faris", Phone: '759-456-789', Major: 'NES' },
    { StudentsID: '105', Name: "Sarah", Phone: '308-456-789', Major: 'SE' },



];

function filterStudents(Major){
    const filtersStudents = studer.filter(student => student.Major === Major);
displayStudents(filtersStudents);


}
function displayStudents(filtersStudents){
const tablebody = document.getElementById('studentTable').getElementsByTagName('today')[0];
tablebody.innerHTML = '' ;

filtersStudents.array.forEach(student => {

    const row = tablebody.insertRow();
    row.innerHTML=`
    <td>${student.id}</td>
      <td>${student.Name}</td>
       <td>${student.Phone}</td>
      <td>${student.Major}</td>
  `;  
})

}
