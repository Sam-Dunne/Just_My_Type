// // adds 2 div wrapped buttons inside div#prompt-container...  and styles
// $('#prompt-container').append('<div class="row col-lg-12 text-center"><button id="restart-btn">Play Again?</button></div>')
// $('#prompt-container').append('<div class="row col-lg-12 text-center"><button id="noReplay-btn">No Thanks</button></div>')
// $('#restart-btn').css({'margin' : '20px 0 20px 0' , 'background-color':'lightgreen'}).hide();
// $('#noReplay-btn').css('background-color' , 'lightcoral').hide()

// // Hides Uppercase Keyboard on page load
// $('#keyboard-upper-container').hide()

// // when SHIFT is pressed: displays uppercase keyboard AND hides lowercase Keyboard
// $(document).keydown(function (e) {
//     if (e.keyCode == 16) {
//         $('#keyboard-upper-container').show();
//         $('#keyboard-lower-container').hide();
//     };
// });
// // shows lowercase keyboard when SHIFT is released, AND hides uppercase Keyboard
// $(document).keyup(function (f) {
//     if (f.keyCode == 16) {
//         $('#keyboard-upper-container').hide();
//         $('#keyboard-lower-container').show();
//     };
// });



// // Keypress & keyup targets which key is pressed, references element #id==> changes background-color to highlight
// $(document).keypress(function (j) {
//     let $key = $("#" + j.keyCode);
//     $($key).css("background-color", "yellow");
//     $(document).keyup(function () {
//         //background color back to normal google helps alot
//         $($key).css("background-color", "#f5f5f5");
//     });
// });


// let sentencesArray = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
// // Variable for value of index of sentencesArray
// let i = 0;
// // Variable for value of index of character at index of sentencesArray
// let j = 0;
// //  Appends current sentencesArray array at index of i to div of id=#sentence
// let $currentSentence = $('#sentence').text(sentencesArray[i]);
// //  Appends next expected letter at sentencesArray at index of i and character at index of j
// let $expectedLetter = $('#target-letter').text(sentencesArray[i].charAt(j))
// //  counts wrong letters typed by player
// let errorCount = 0;
// // Booleans when true create time stamp
// let startTimer = false;
// let endTimer = false;
// // let totalTime = (gameOverTime - timeOfStart);
// let totalChars = (sentencesArray[0].length + sentencesArray[1].length + sentencesArray[2].length + sentencesArray[3].length + sentencesArray[4].length)
// // for number of keypress events
// let eventCount = 0;


// //  event listener for keypress
// $(document).keypress(function (e) {
//     // event stamps game started
//     if (startTimer == false) {
//         e.timeStamp;
//         timeOfStart = e.timeStamp;
//         startTimer = true;
//         console.log(timeOfStart);
//     }
//     // ascii code for next letter game objective
//     let $expectedLetterValue = (sentencesArray[i].charCodeAt(j))
//     //  gets ascii code for player keys
//     let $keyValue = e.keyCode;


//     j++;
//     eventCount++;
//     // nudges div#yellow-block to next letter of full sentence(div#sentence)
//     $('#yellow-block').css('left', '+=16.4')
//     if (eventCount <= 239) {
//         if ($keyValue == $expectedLetterValue) {

//             if (j == sentencesArray[i].length) {
//                 $('#feedback').text(' ')
//                 i++;
//                 $('#sentence').text(sentencesArray[i]);
//                 $('#yellow-block').css('left', '0')
//                 $('#yellow-block').css('left', '+=15')
//                 j = 0;
//             }
//             $('#target-letter').text(sentencesArray[i].charAt(j));
//             $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');

//             console.log('match')
//         } else {
//             errorCount++

//             if (j == sentencesArray[i].length) {
//                 $('#feedback').text(' ')
//                 i++;
//                 $('#sentence').text(sentencesArray[i]);
//                 $('#yellow-block').css('left', '0')
//                 $('#yellow-block').css('left', '+=15')
//                 j = 0;
//             }
//             $('#target-letter').text(sentencesArray[i].charAt(j));
//             $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');

//             console.log('mismatch')
//         };
//     } else {
//         $('#feedback').hide();
//         $('#sentence').hide();
//         $('#yellow-block').hide();
//         $('#keyboard-lower-container').hide();
//         $('#32').hide();
//         $('body').css('background-color', 'lightslategray');
//         if (endTimer == false) {
//             e.timeStamp;
            
//             gameOverTime = e.timeStamp;
//             endTimer = true
//             console.log(gameOverTime + ' ending')
//             console.log(gameOverTime - timeOfStart);
//             $('#target-letter').text(Math.round(54 / ((gameOverTime - timeOfStart) / 1000 /60) - 2 * errorCount) + " Words Per Minute").css({ 'background-color': 'tomato', 'margin-top': '300px', 'border-radius': '10px' }).slideUp(800).delay(2000).fadeIn(4000);
//         }
        
//          setTimeout(function () {
//         $('#restart-btn').show();
//         $('#noReplay-btn').show()
//          }, 9000);
        
//     }
    
    
// });

// $('#restart-btn').click(function () {
//     location.reload()
// })
// $('#noReplay-btn').click(function (){
//     $('#restart-btn').hide();
//     $('#noReplay-btn').hide()

// })

