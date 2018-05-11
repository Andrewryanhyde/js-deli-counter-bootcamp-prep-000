let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  let position = katzDeliLine.length
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.'
}


function nowServing() {
  if (katzDeliLine.length > 0) {
    return katzDeliLine[0]
  } else {
    return "There is nobody waiting to be served!"
  }
}