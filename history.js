
    document.getElementById("summarySheet").addEventListener("click", function () {
            createSummarySheet();
        });
    document.getElementById("submit").addEventListener("click", function () {
            readResults();
        });
        function readResults() {
            var stuff = document.getElementById('contents'),
                stuffContents = stuff.getElementsByTagName('*');
            var x, y;
            for (x = 0; x < stuffContents.length; ++x) {
                y = stuffContents[x];
                if (y.tagName == "INPUT") {
                    localStorage.setItem(y.id, y.value);
                    console.log(y.id, y.value);
                }
            }
        }
         function summarySheet() {
            document.getElementById("createSummarySheet").parentNode.removeChild(document.getElementById("createSummarySheet"));
            document.getElementById("title").innerHTML = document.getElementById("title").innerHTML + " Summary";
             for (var i = 0, len = localStorage.length; i < len; ++i) {
                if (document.getElementById(localStorage.key(i)).type == "checkbox") {
                    document.getElementById(localStorage.key(i)).checked = (localStorage.getItem(localStorage.key(i)) == "true");
                    document.getElementById(localStorage.key(i)).disabled = "true";
                }
                if (document.getElementById(localStorage.key(i)).type == "text") {
                    document.getElementById(localStorage.key(i)).value = localStorage.getItem(localStorage.key(i));
                    document.getElementById(localStorage.key(i)).disabled = "true";
                }
            }
        }
        var jsontext = JSON.parse('{	"menstrual history": {		"title": "Menstrual History",		"Questions": [{			"question": "Day of last period(first day):",			"answers": {				"type": "textbox"			}		}, {			"question": "Are you menopausal?",			"answers": [{				"text": "yes",				"type": "checkbox"			}, {				"text": "no",				"type": "checkbox"			}]		}, {			"question": "Do you take oral contraceptives?",			"answers": [{				"text": "yes",				"type": "checkbox"			}, {				"text": "no",				"type": "checkbox"			}]		}, {			"question": "If yes, please list the date you started:",			"answers": {				"type": "textbox"			}		}, {			"question": "PRE-INJURY:What is your average length of cycle (1st day to 1st day)?",			"answers": {				"type": "textbox"			}		}, {			"question": "Have you missed any periods?",			"answers": [{				"text": "yes",				"type": "checkbox"			}, {				"text": "no",				"type": "checkbox"			}]		}, {			"question": "If yes, how many and when?",			"answers": {				"type": "textbox"			}		}, {			"question": "Describe your periods",			"answers": [{				"text": "Light",				"type": "checkbox"			}, {				"text": "Moderate",				"type": "checkbox"			}, {				"text": "Heavy",				"type": "checkbox"			}]		}, {			"question": "POST-INJURY:What is your average length of cycle (1st day to 1st day)?",			"answers": {				"type": "textbox"			}		}, {			"question": "Have you missed any periods?",			"answers": [{				"text": "yes",				"type": "checkbox"			}, {				"text": "no",				"type": "checkbox"			}]		}, {			"question": "If yes, how many and when?",			"answers": {				"type": "textbox"			}		}, {			"question": "Describe your periods",			"answers": [{				"text": "Light",				"type": "checkbox"			}, {				"text": "Moderate",				"type": "checkbox"			}, {				"text": "Heavy",				"type": "checkbox"			}]		}]	}}');
    var title = document.createElement('e1');
    title.appendChild(document.createTextNode(jsontext["menstrual history"]["title"]));
    contents.appendChild(title);
    contents.appendChild(document.createElement("br"));
    contents.appendChild(document.createElement("br"));

        for (i = 0; i < jsontext["menstrual history"]["Questions"].length; i++) {
            var question = document.createElement('e3');
            question.appendChild(document.createTextNode(jsontext["menstrual history"]["Questions"][i].question));
            contents.appendChild(question);
            var contents1 = document.createElement('form');
            contents1.className = "option";

            for (h = 0; h < jsontext["menstrual history"]["Questions"][i].answers.length; h++) {
                var input = document.createElement('input');
                var label = document.createElement('label');
                var textbox = document.createElement('input');
                label.htmlFor = "question: " + i + " answer: " + h + " check";
                label.appendChild(document.createTextNode(jsontext["menstrual history"]["Questions"][i].answers[h].text));
               
                if (jsontext["menstrual history"]["Questions"][i].answers[h].type.indexOf("text") != -1) {
                    textbox.type = "text";
                    textbox.id = "question: " + i + " answer: " + h + " text";
                    if (textbox.id != "") {
                    contents1.appendChild(textbox);
                }
                }
                
                if (jsontext["menstrual history"]["Questions"][i].answers[h].type.indexOf("checkbox") != -1) {
                    input.type = "checkbox";
                    input.id = "question: " + i + " answer: " + h + " check";
                    if (input.id != "") {
                    contents1.appendChild(input);
                }
                contents1.appendChild(label);
                }
                contents.appendChild(document.createElement("br"));
            }
            contents.appendChild(contents1);
        }

        for (i = 0; i < jsontext["menstrual history"]["Questions"].length; i++) {
            for (h = 0; h < jsontext["menstrual history"]["Questions"][i].answers.length; h++) {
                
                $("question: " + i + " answer: " + h + "check").change(function() {
                    
                    if ($(this).is('checked')) {} 
                        else {
                    }
                });
            }
        }