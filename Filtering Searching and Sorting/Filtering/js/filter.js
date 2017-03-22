  // Filtering code
  // ForEach approach: 
  $(function () {
      // people data
      var people = [

          {
              name: 'Casey',
              rate: 60
        },

          {
              name: 'Camille',
              rate: 80
        },

          {
              name: 'Gordon',
              rate: 70
        },

          {
              name: 'Nigel',
              rate: 120
        }

    ];


      // array for people in range    
      var foreachresults = [];
      // loops each person and performs filters on each
      people.forEach(function (person) {
          if (person.rate >= 65 && person.rate <= 90) {
              // pushes results in the new array
              foreachresults.push(person);
          }
      });

      var $tableBody = $('<tbody></tbody>');
      for (var i = 0; i < foreachresults.length; i++) {
          var person = foreachresults[i];
          var $row = $('<tr></tr>');
          $row.append($('<td></td>').text(person.name));
          $row.append($('<td></td>').text(person.rate));
          $tableBody.append($row);
      }

      $('thead').after($tableBody);

  });

  //  // Filtering code
  //  // Filter approach: 
  //  $(function () {
  //
  //      // the function acts as a filter 
  //      function priceRange(person) {
  //          return (person.rate >= 65) && (person.rate <= 90);
  //      }
  //
  //      // filter the people array and add matches to the result array
  //      var filterResult = [];
  //      filterResult = people.filter(priceRange);
  //
  //      var $tableBody = $('<tbody></tbody>');
  //      for (var i = 0; i < foreachresults.length; i++) {
  //          var person = filterResult[i];
  //          var $row = $('<tr></tr>');
  //          $row.append($('<td></td>').text(person.name));
  //          $row.append($('<td></td>').text(person.rate));
  //          $tableBody.append($row);
  //      }
  //
  //      $('thead').after($tableBody);
  //  });