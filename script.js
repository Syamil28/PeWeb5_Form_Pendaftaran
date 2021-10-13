function validateForm() {
    if (document.forms["vaccinationForm"]["name"].value == "") {
        Swal.fire({
            text: 'Name cannot be empty',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["vaccinationForm"]["name"].focus();
        return false;
    }
    if (document.forms["vaccinationForm"]["nrp"].value == "") {
        Swal.fire({
            text: 'Fill your Student ID',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["vaccinationForm"]["std"].focus();
        return false;
    }
    if (document.forms["vaccinationForm"]["email"].value == "") {
        Swal.fire({
            text: 'Fill your Email',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["vaccinationForm"]["email"].focus();
        return false;
    }
    if (document.forms["vaccinationForm"]["gender"].value < 1) {
        Swal.fire({
            text: 'What is your gender?',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["vaccinationForm"]["gender"].focus();
        return false;
    }
    if (document.forms["vaccinationForm"]["major"].selectedIndex < 1) {
        Swal.fire({
            text: 'Fill your Major',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["vaccinationForm"]["major"].focus();
        return false;
    }
    if (document.forms["vaccinationForm"]["address"].value == "") {
        Swal.fire({
            text: 'Fill your address',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["vaccinationForm"]["address"].focus();
        return false;
    }
    if (document.forms["vaccinationForm"]["vaccine_desc"].selectedIndex < 1) {
        Swal.fire({
            text: 'Choose your vaccination status!',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["vaccinationForm"]["vaccine_desc"].focus();
        return false;
    } else if (document.forms["vaccinationForm"]["vaccine_desc"].value == "1") {
        if (document.forms["vaccinationForm"]["vac_kind"].selectedIndex < 1) {
            Swal.fire({
                text: 'What your kind of vaccine?',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["vaccinationForm"]["vac_kind"].focus();
            return false;
        }
        if (document.forms["vaccinationForm"]["dose"].value == "") {
            Swal.fire({
                text: 'Fill your vaccine dose',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["VaccinationForm"]["dose"].focus();
            return false;
        }
        if (document.forms["vaccinationForm"]["certif_id"].value == "") {
            Swal.fire({
                text: 'Fill your Certificate ID',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["vaccinationForm"]["certif_id"].focus();
            return false;
        }
        if (document.forms["vaccinationForm"]["vac_date"].value == "") {
            Swal.fire({
                text: 'When do you get vaccinated?',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["vaccinationForm"]["vac_date"].focus();
            return false;
        }
    } else if (document.forms["vaccine_desc"].value == "2") {
        if (document.forms["vaccinationForm"]["vac_reason"].selectedIndex < 1) {
            Swal.fire({
                text: 'Fill your reason',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["vaccinationForm"]["vac_reason"].focus();
            return false;
        }
    }
 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Succes!',
                text: 'Your data has been submitted.',
                icon: 'success',
                confirmButtonColor: '#3085d6'
            });
            document.forms["vaccinationForm"].reset();
            document.getElementById('already_vac').style.display = 'none';
            document.getElementById('not_vac').style.display = 'none';
        }
    });
    return false;
}
 
function isVaksin() {
    if (document.forms["vaccinationForm"]["vaccine_desc"].value == "0") {
        document.getElementById('already_vac').style.display = 'none';
        document.getElementById('not_vac').style.display = 'none';
    } else if (document.forms["vaccinationForm"]["vaccine_desc"].value == "1") {
        document.getElementById('already_vac').style.display = 'block';
        document.getElementById('not_vac').style.display = 'none';
    } else if (document.forms["vaccinationForm"]["vaccine_desc"].value == "2") {
        document.getElementById('already_vac').style.display = 'none';
        document.getElementById('not_vac').style.display = 'block';
    }
}