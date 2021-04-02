

export default function change(ade) {
	if (ade == "Duet") {
		const info2 = document.querySelector("#info2");
		info2.innerHTML = `<center>
				<div>
					<h3>Student Detail</h3>
				</div>
			</center>
			<div class="ade1">
				<div class ="student1"> Student 1</div>
				<div>
					<label>Image</label>
					<input type="file" accept="image/*" id="image1" required>
				</div>
				<div id="ade1">
					<label>First Name</label><br>
					<input type="text" name="fname" id="fname" required>
				</div>
				<div id="ade1">
					<label>Last Name</label><br>
					<input type="text" name="lname" id="lname" required>
				</div>
				<div id="ade1">
					<label>Student ID:</label><br>
					<input type="text" name="id" id="id" required>
				</div>
				<div id="ade1">
					<label>Skill level</label><br>
					<select name="skill" id="skill">
						<option> Beginner</option>
						<option> Intermediate</option>
						<option> Pre-advanced</option>
						<option> Advanced</option>
					</select>
				</div>
				<div id="ade1">
					<label>Instrument</label><br>
					<select name="instrument" id="instrument">
						<option>Piano</option>
						<option>Voice</option>
						<option>String</option>
						<option>Organ</option>,
						<option>other</option>
					</select>
				</div>

			</div>
			<div class="ade2" id="ade3">
				<div class = "student1">Student 2</div>
				<div>
					<label>Image</label>
					<input type="file" accept="image/*" id="image2" required>
				</div>
				<div id="ade2">
					<label>First Name</label><br>
					<input type="text" name="fname2" id="fname2" required>
				</div>
				<div id="ade2">
					<label>Last Name</label><br>
					<input type="text" name="lname2" id="lname2" required>
				</div>
				<div id="ade2">
					<label>Student ID:</label><br>
					<input type="text" name="id2" id="id2" required>
				</div>
				<div id="ade2">
					<label>Skill level</label><br>
					<select name="skill2" id="skill2" id="skill2">
						<option> Beginner</option>
						<option> Intermediate</option>
						<option> Pre-advanced</option>
						<option> Advanced</option>
					</select>
				</div>
				<div id="ade2">
					<label>Instrument</label><br>
					<select name="instrument2" id="instrument2">
						<option>Piano</option>
						<option>Voice</option>
						<option>String</option>
						<option>Organ</option>,
						<option>>other</option>
					</select>
				</div>

			</div> `


	}
	else {
		const info2 = document.querySelector("#info2");
		info2.innerHTML = `<center>
				<div>
					<h3>Student Detail</h3>
				</div>
			</center>
			<div class="ade1">
				<div class = "student1">Student 1</div>
				<div>
					<label>Image</label>
					<input type="file" accept="image/*" id="image1" required>
				</div>
				<div id="ade1">
					<label>First Name</label><br>
					<input type="text" name="fname" id="fname" required>
				</div>
				<div id="ade1">
					<label>Last Name</label><br>
					<input type="text" name="lname" id="lname" required>
				</div>
				<div id="ade1">
					<label>Student ID:</label><br>
					<input type="text" name="id" id="id" required>
				</div>
				<div id="ade1">
					<label>Skill level</label><br>
					<select name="skill" id="skill">
						<option> Beginner</option>
						<option> Intermediate</option>
						<option> Pre-advanced</option>
						<option> Advanced</option>
					</select>
				</div>
				<div id="ade1">
					<label>Instrument</label><br>
					<select name="instrument" id="instrument">
						<option>Piano</option>
						<option>Voice</option>
						<option>String</option>
						<option>Organ</option>,
						<option>other</option>
					</select>
				</div>

			</div>
			 `;
	}
	
}

export  function listView(performance) {
	document.querySelector("#form").style.display = "none";
	const listView = document.querySelector('#list')
	listView.innerHTML = ""
	for (let i = 0; i < performance.length; i++) {
		console.log(performance[i])
		const view = document.createElement("section")
		if (performance[i].type == "Duet") {
			view.setAttribute("id", "double")
			view.setAttribute('class', i);
			view.innerHTML = `<img src="${performance[i].picture1}" alt="" id="img" class = "${i}">
        <div id="div" class =${i}>
            <p class = ${i}>name: ${performance[i].Fname1.toUpperCase()} ${performance[i].Lname1.toUpperCase()}<br></p>
            <p class =${i}>Student Id: ${performance[i].Student_id1} <br></p>
            <p class = ${i}>Skill Level: ${performance[i].skill1}<br></p>
        </div>
        <img src="${performance[i].picture2}" alt="" id="img" class = ${i}>
        <div id="div" class = ${i}>
            <p class = ${i}>name: ${performance[i].Fname2.toUpperCase()} ${performance[i].Lname2.toUpperCase()}<br></p>
            <p class = ${i}>Student Id: ${performance[i].Student_id2}<br></p>
            <p class = ${i}>Skill Level: ${performance[i].skill2}<br></p>
        </div>`
		} else {
			view.setAttribute("id", "single")
			view.setAttribute('class', i);
			view.innerHTML = `<img src="${performance[i].picture1}" alt="" id="img" class = ${i}>
        <div id="div" class = ${i}>
           <p class = ${i}>name: ${performance[i].Fname1.toUpperCase()} ${performance[i].Lname1.toUpperCase()}<br></p>
           <p class = ${i}>Student Id: ${performance[i].Student_id1}<br></p>
           <p class = ${i}>Skill Level: ${performance[i].skill1}<br></p>
        </div>`
		}
		listView.appendChild(view)
	}

}
export  function detail(performance){
		if (performance.type != "Duet") {
			const detail = document.createElement("section")
			detail.innerHTML = `<img src="${performance.picture1}" alt="" id="img">
        <section id="detail">
            <div>
                <h3>STUDENT's DETAILS</h3>
                <p>name: ${performance.Fname1} 
					${performance.Lname1}<br></p>
                <p>Student Id: ${performance.Student_id1}<br></p>
                <p>Skill Level: ${performance.skill1}<br></p>
                <p>Instrument: ${performance.instrument1}<br></p>
            </div>
            <div>
                <div>
                    <h3>performance DETAILS</h3>
                    <p>Type: ${performance.type}<br></p>
                    <p>Building: ${performance.building1}<br></p>
                    <p>Room: ${performance.rooom1}<br></p>
                    <p>Date/Time: ${performance.time1}<br></p>
                </div>
            </div>`
			detail.setAttribute('id', "deal")
			document.querySelector("#details").appendChild(detail)

		} else {
			const detail = document.createElement("section")
			detail.innerHTML = `<img src="${performance.picture1}" alt="" id="img">
        <section id="detail">
            <div>
                <h3>STUDENT's DETAILS</h3>
                <p>name: ${performance.Fname1} 
					${performance.Lname1}<br></p>
                <p>Student Id: ${performance.Student_id1}<br></p>
                <p>Skill Level: ${performance.skill1}<br></p>
                <p>Instrument: ${performance.instrument1}<br></p>
            </div>
            <div>
                <div>
                    <h3>performance DETAILS</h3>
                    <p>Type: ${performance.type}<br></p>
                    <p>Building: ${performance.building1}<br></p>
                    <p>Room: ${performance.rooom1}<br></p>
                    <p>Date/Time: ${performance.time1}<br></p>
                </div>
            </div>`
			detail.setAttribute('id', "deal")

			const detail2 = document.createElement("section")
			detail2.innerHTML = `<img src="${performance.picture2}" alt="" id="img">
        <section id="detail">
            <div>
                <h3>STUDENT's DETAILS</h3>
                <p>name: ${performance.Fname2} 
					${performance.Lname2}<br></p>
                <p>Student Id: ${performance.Student_id2}<br></p>
                <p>Skill Level: ${performance.skill2}<br></p>
                <p>Instrument: ${performance.instrument2}<br></p>
            </div>
            <div>
                <div>
                    <h3>performance DETAIL2S</h3>
                    <p>Type: ${performance.type}<br></p>
                    <p>Building: ${performance.building1}<br></p>
                    <p>Room: ${performance.rooom1}<br></p>
                    <p>Date/Time: ${performance.time1}<br></p>
                </div>
            </div>`
			detail2.setAttribute('id', "deal")
			document.querySelector("#details").appendChild(detail)
			document.querySelector("#details").appendChild(detail2)
		}
	}
