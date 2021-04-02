import change, { listView,detail}  from './view.js';
import studentDetails from './model.js'


let Performance = []
if (localStorage.getItem("perform", JSON.stringify(Performance))){
    console.log(JSON.parse(localStorage.getItem("perform", JSON.stringify(Performance))))
    Performance = JSON.parse(localStorage.getItem("perform", JSON.stringify(Performance)))
}

    function dataUrl() {
        if (document.querySelector(".ade1") && !document.querySelector(".ade2")) {
            document.getElementById("image1").addEventListener("change", function () {
                const image = new FileReader();
                image.readAsDataURL((document.querySelector("#image1").files[0]));
                image.addEventListener('load', function () {
                    localStorage.setItem("image1", image.result);
                    console.log(image.result)
                })

            })

        }
        else if (document.querySelector(".ade1") && document.querySelector(".ade2")) {
            document.getElementById("image1").addEventListener("change", function () {
                const image = new FileReader();
                image.readAsDataURL((document.querySelector("#image1").files[0]));
                image.addEventListener('load', function () {
                    localStorage.setItem("image1", image.result);
                    console.log(image.result)
                })

            })
            document.getElementById("image2").addEventListener("change", function () {
                const image = new FileReader();
                image.readAsDataURL((document.querySelector("#image2").files[0]));
                image.addEventListener('load', function () {
                    localStorage.setItem("image2", image.result);
                    console.log(image.result)
                })

            })

        }


    }
function validation() {
        document.querySelector("#submit").addEventListener('click', function (event) {

            event.preventDefault()


            if (document.querySelector(".ade1") && !document.querySelector(".ade2")) {
                console.log("ade")
                if (document.querySelector("#room").value == '') {

                    document.querySelector("#room").focus()
                }
                else if (document.querySelector("#time").value == '') {

                    document.querySelector("#time").focus()
                }
                else if (document.querySelector("#image1").files.length == 0) {
                    alert('Please Choose an image')
                }
                else if (document.querySelector("#fname").value == '') {


                    document.querySelector("#fname").focus()
                }
                else if (document.querySelector("#lname").value == '') {


                    document.querySelector("#lname").focus()
                }
                else if (document.querySelector("#id").value == '') {

                    document.querySelector("#id").focus()
                } else {
                    console.log("it sia ")
                    const performance = new studentDetails(
                        document.querySelector("#fname").value,
                        document.querySelector("#lname").value,
                        document.querySelector("#id").value,
                        localStorage.getItem("image1"),
                        document.querySelector("#skill").value,
                        document.querySelector("#instrument").value,
                        document.querySelector("#type").value,
                        document.querySelector("#building").value,
                        document.querySelector("#room").value,
                        document.querySelector("#time").value
                    )
                    if (confirm("Are you ready to submit")) {
                        console.log
                        Performance.push(performance)
                        localStorage.setItem("perform",JSON.stringify(Performance))
                        alert("registration completed")
                        document.querySelector("#form").reset()
                    }

                }
            }

            if (document.querySelector(".ade1") && document.querySelector(".ade2")) {
                if (document.querySelector("#room").value == '') {

                    document.querySelector("#room").focus()
                }
                else if (document.querySelector("#time").value == '') {


                    document.querySelector("#time").focus()
                }
                else if (document.querySelector("#image1").files.length == 0) {
                    alert('Please Choose an image')
                    document.querySelector("#image1").focus()
                }
                else if (document.querySelector("#fname").value == '') {


                    document.querySelector("#fname").focus()
                }
                else if (document.querySelector("#lname").value == '') {


                    document.querySelector("#lname").focus()
                }
                else if (document.querySelector("#id").value == '') {
                    document.querySelector("#id").focus()
                }
                else if (document.querySelector("#image2").files.length == 0) {
                    alert('Please Choose an image')
                }
                else if (document.querySelector("#fname2").value == '') {


                    document.querySelector("#fname2").focus()
                }
                else if (document.querySelector("#lname").value == '') {


                    document.querySelector("#lname2").focus()
                }
                else if (document.querySelector("#id2").value == '') {

                    document.querySelector("#id2").focus()
                } else {

                   const performance = new studentDetails(
                        document.querySelector("#fname").value,
                        document.querySelector("#lname").value,
                        document.querySelector("#id").value,
                        localStorage.getItem("image1"),
                        document.querySelector("#skill").value,
                        document.querySelector("#instrument").value,
                        document.querySelector("#type").value,
                        document.querySelector("#building").value,
                        document.querySelector("#room").value,
                        document.querySelector("#time").value,
                        document.querySelector("#fname2").value,
                        document.querySelector("#lname2").value,
                        document.querySelector("#id2").value,
                        localStorage.getItem("image2"),
                        document.querySelector("#skill2").value,
                        document.querySelector("#instrument2").value)
                    if (confirm("Are you ready to submit")) {
                        Performance.push(performance)
                        localStorage.setItem("perform", JSON.stringify(Performance))
                        alert("registration completed")
                        document.querySelector("#form").reset()
                    }

                }


            }
        })


    }

 function listenner(){
    change(document.querySelector('#type').value)
    document.querySelector("#viewlist").addEventListener("click", function () {
        listView(Performance);
        document.querySelector("#details").innerHTML = ""
    })
    document.querySelector("#register").addEventListener("click", function () {

        document.querySelector("#form").style.display = "grid";
        document.querySelector("#list").innerHTML = ""
        document.querySelector("#details").innerHTML = ""
    })
    document.querySelector('#list').addEventListener("click", function (event) {

        document.querySelector("#form").style.display = "none";
        document.querySelector("#list").innerHTML = ""
        detail(Performance[Number(event.target.className)]);


    })
    document.querySelector("#type").addEventListener('change', function (event) {
        //console.log(document.querySelector('#type').value)
        
        change(document.querySelector('#type').value)
    }, )
    dataUrl();
    validation();
}
listenner();

