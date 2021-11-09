// Function to show/hide button containers based on dropdown value
$(document).ready(function () {
  $('select')
    .change(function () {
      $(this)
        .find('option:selected')
        .each(function () {
          var optionValue = $(this).attr('value')
          if (optionValue) {
            $('.race-btns')
              .not('.' + optionValue)
              .hide()
            $('.' + optionValue).show()
          } else {
            $('.race-btns').hide()
          }
        })
    })
    .change()
})
