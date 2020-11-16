function new_numbers(num){
	document.getElementById('output').value += num;
}

function new_operand(char){
	document.getElementById('output').value += char;
}

function special_operand(char){
	switch(char){
		case '.':
			document.getElementById('output').value += char;
			break;
		case 'c':
			document.getElementById('output').value = '';
			break;
		case '=':
			document.getElementById('output').value = eval(document.getElementById('output').value);
			break;
		default:
			console.log('OPERAND NOT VALID FOUND');
			break;	
	}
}

