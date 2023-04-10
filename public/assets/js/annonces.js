$(document).ready(function () {

  // Acceptation des conditions

  $('#accept-condition').change(function () {
    $('#accept-condition').val($(this).is(':checked'));
    $('#contact-proprietaire').toggleClass('disabled');
  })

  // Acceptation des conditions
  $('#accept-condition-2').change(function () {
    $('#accept-condition-2').val($(this).is(':checked'));
    $('#contact-proprietaire-2').toggleClass('disabled');
  })

  // Galerie image

  $('.image-galerie-1').on('click', function (e) {

    e.preventDefault();

    $('#image-1').show();
    $('#image-2').hide();
    $('#image-3').hide();
    $('#image-4').hide();

  })

  $('.image-galerie-2').on('click', function (e) {

    e.preventDefault();

    $('#image-1').hide();
    $('#image-2').show();
    $('#image-3').hide();
    $('#image-4').hide();

  })

  $('.image-galerie-3').on('click', function (e) {

    e.preventDefault();

    $('#image-1').hide();
    $('#image-2').hide();
    $('#image-3').show();
    $('#image-4').hide();

  })

  $('.image-galerie-4').on('click', function (e) {

    e.preventDefault();

    $('#image-1').hide();
    $('#image-2').hide();
    $('#image-3').hide();
    $('#image-4').show();

  })

  // Contact Propriétaire


  $('#contact-prop').on('submit', function (e) {

    e.preventDefault();

    var email = $('#email_contact').val(),
      id = $('#location_id').val(),
      type = $('#location_type').val(),
      url = '../ajax/ajax-contact-proprietaire.php'

    $('#contact-prop').hide();
    $('#loader-form').removeClass('hidden');

    $.ajax({
      url: url,
      type: 'POST',
      data: {
        email_contact: email,
        location_id: id,
        location_type: type
      },
      success: function (data) {

        setTimeout(() => {
          $('#loader-form').addClass('hidden');
        }, 2000);

        var parsed = JSON.parse(data);

        if (parsed.create == true) {

          setTimeout(() => {
            $('.show-coordonee').attr('style', 'display: flex;align-content: center;align-items: flex-start;justify-content: center;');
          }, 2000);

        }

        if (parsed.create == false) {
          setTimeout(() => {
            $('.show-coordonee').attr('style', 'display: flex;align-content: center;align-items: flex-start;justify-content: center;');
          }, 2000);
        }

      }

    })

  })

  $('#contact-prop-2').on('submit', function (e) {

    e.preventDefault();

    var email = $('#email_contact').val(),
      id = $('#location_id').val(),
      type = $('#location_type').val(),
      url = '../ajax/ajax-contact-proprietaire.php'

    $('#contact-prop-2').hide();
    $('#loader-form-2').removeClass('hidden');

    $.ajax({
      url: url,
      type: 'POST',
      data: {
        email_contact: email,
        location_id: id,
        location_type: type
      },
      success: function (data) {

        setTimeout(() => {
          $('#loader-form-2').addClass('hidden');
        }, 2000);

        var parsed = JSON.parse(data);

        if (parsed.create == true) {

          setTimeout(() => {
            $('.show-coordonee-2').attr('style', 'display: flex;align-content: center;align-items: flex-start;justify-content: center;');
          }, 2000);

        }

        if (parsed.create == false) {
          setTimeout(() => {
            $('.show-coordonee-2').attr('style', 'display: flex;align-content: center;align-items: flex-start;justify-content: center;');
          }, 2000);
        }

      }

    })

  })
