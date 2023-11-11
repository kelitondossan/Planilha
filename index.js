function editRow(rowId) {
    // Obter a referência da linha
    var row = document.getElementById(rowId);

    // Obter os valores atuais da linha
    var currentDay = row.cells[0].innerText;
    var currentHour = row.cells[1].innerText;
    var currentActivity = row.cells[2].innerText;

    // Solicitar ao usuário novos valores
    var newDay = prompt('Editar Dia:', currentDay);
    var newHour = prompt('Editar Hora:', currentHour);
    var newActivity = prompt('Editar Atividade:', currentActivity);

    // Atualizar os valores na linha se o usuário fornecer dados
    if (newDay !== null && newHour !== null && newActivity !== null) {
      row.cells[0].innerText = newDay;
      row.cells[1].innerText = newHour;
      row.cells[2].innerText = newActivity;

      alert('Linha com ID ' + rowId + ' editada com sucesso.');
    } else {
      alert('Edição cancelada.');
    }
  }

  function deleteRow(rowId) {
    // Remover a linha com o ID rowId
    document.getElementById(rowId).remove();
    alert('Linha com ID ' + rowId + ' excluída com sucesso.');
  }

  function addNewDay() {
    var table = document.getElementById('scheduleTable');
    var newRow = table.insertRow(table.rows.length);
    var rowId = 'row' + (table.rows.length - 1);

    var daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    var newDay = prompt('Informe o novo dia:');
    var newHour = prompt('Informe o horário (formato HH:mm):');
    var newActivity = prompt('Informe a atividade:');
    var difficultySelect = document.getElementById('difficulty');
    var selectedDifficulty = difficultySelect.options[difficultySelect.selectedIndex].value;

    // Verificar se o usuário forneceu dados
    if (newDay !== null && newHour !== null && newActivity !== null) {
      newRow.id = rowId;
      newRow.insertCell(0).innerText = newDay;
      newRow.insertCell(1).innerText = newHour;
      newRow.insertCell(2).innerText = newActivity;

      // Adicionar etiqueta de dificuldade
      switch (selectedDifficulty) {
        case 'easy':
          newRow.cells[2].classList.add('easy-label');
          break;
        case 'medium':
          newRow.cells[2].classList.add('medium-label');
          break;
        case 'critical':
          newRow.cells[2].classList.add('critical-label');
          break;
        default:
          break;
      }

      var cellActions = newRow.insertCell(3);
      cellActions.innerHTML = '<button class="button edit-button" onclick="editRow(\'' + rowId + '\')">Editar</button>' +
                              '<button class="button delete-button" onclick="deleteRow(\'' + rowId + '\')">Excluir</button>';
    } else {
      alert('Adição cancelada.');
      table.deleteRow(table.rows.length - 1);  // Remover a linha adicionada se a adição for cancelada
    }
  }

  
  function downloadPDF() {
    var element = document.getElementById('scheduleTable'); // ou qualquer outro elemento que você deseja converter para PDF
    html2pdf(element);
  }


 