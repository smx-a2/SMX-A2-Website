
const HomeAct = new activity({name:"Home",code:`

	<d-navbar position="top">

			<navbar-title> DEURES </navbar-title>
	</d-navbar>
	<d-content>
			<div id="tasks"  content="center">
					<p id="loading">Loading...</p>
			</div>

			<p>Dando competencia a moodle desde el 10/2/19</p>
			<a id="source" target="_blank" href="https://github.com/smx-a2/SMX-A2-Website">→ Source Code </a>
	</d-content>

	`});
const colors ={
    M1:"rgb(21,193,17)",
    M2:"rgb(221,168,119)",
    M3:"rgb(17,117,238)",
    M5:"rgb(233,201,22)",
    M9:"red",
    M11:"darkgreen"
  };
function Main(){

    newTheme({
        Name : 'dark-p',
        Primary : 'purple',
        Light: 'white',
        Secondary: 'red',
        Background: 'purple',
        RippleEffect : 'rgba(0,0,0,0.6)'
    });
    setTheme("dark-p");	
	load({
		home: HomeAct,
		style:"default"
	});

  requirejs(["https://drive.google.com/uc?export=view&id=17qRQjilEnY_YxJmXG5a20WJ1o9BfpvUe"], function(myData){
  for (const key of Object.keys(myData)) {
    const current = myData[key];
    document.getElementById("tasks").innerHTML += "<div class='card' onclick='dynamicPage("+JSON.stringify(current)+")' > <ul><li> <a class='assign' style='color:"+colors[current.assign]+"'</a>"+current.assign+" → </a> </li> <li><a class='title'>"+current.title+"</a></li> </ul><p class='descrip'>"+current.descrip+"</p><p class='data'>"+current.date+"</p> </div></div>"
  }
  document.getElementById("loading").remove();
});
}


function dynamicPage(obj){

	const page = new activity({name:Math.random(),code:`

	<d-navbar position="top">
			<img class="navbar-icon" onclick="closeActivity('slide_right')" src="arrow_back.svg"></img>	
			<navbar-title> ${obj.assign} -> ${obj.title} </navbar-title>
	</d-navbar>
	<d-content>
		<p style='color:${colors[obj.assign]}; '>Assignatura ${obj.assign}</p>
		<p >Deures > ${obj.title}</p>
		<p style="font-weight:bold;">Data màxima > ${obj.date}</p>
	</d-content>

	`});
	page.launch({
		animation:"slide_left"
	})

}