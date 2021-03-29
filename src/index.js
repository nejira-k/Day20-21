var xy = '';
var FcapsLock = '0';
var Fshift = '0';

function funcDel() {
	var valu = document.getElementById('display').innerHTML;
	var x = document.getElementById('display').innerHTML.length;
	var y = 1;
	var z = x-y;
	document.getElementById('display').innerHTML=valu.slice(0,z);
}
function funcCL() {
	if (FcapsLock == '0') {
		FcapsLock = '1';
	}else if (FcapsLock == '1') {
		FcapsLock = '0';
	}
}

function funcClear() {
	var valu = document.getElementById('display').innerHTML='';
	FcapsLock = '0';
    Fshift = '0';
}

function funcShift() {
	if (Fshift == '0') {
		Fshift = '1';
	}else if (Fshift == '1') {
		Fshift = '0';
	}
}

function funcEnter() {
	var valu = document.getElementById('display').innerHTML;
	if (valu == '') {
		alert('Not inserted : Empty innerHTML');
	}else{
		alert('Data Inserted : '+valu);
	}
}

function funcTab() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+'	';
}

function funcSpace() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+' ';
}

function funcq() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'q';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Q';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Q';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'q';
		}
	}
}

function funcw() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'w';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'W';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'W';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'w';
		}
	}
}

function funce() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'e';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'E';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'E';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'e';
		}
	}
}

function funcr() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'r';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'R';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'R';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'r';
		}
	}
}

function funct() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'t';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'T';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'T';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'t';
		}
	}
}

function funcy() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'y';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Y';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Y';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'y';
		}
	}
}

function funcu() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'u';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'U';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'U';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'u';
		}
	}
}

function funci() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'i';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'I';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'I';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'i';
		}
	}
}

function funco() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'o';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'O';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'O';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'o';
		}
	}
}

function funcp() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'p';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'P';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'P';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'p';
		}
	}
}

function funca() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'a';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'A';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'A';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'a';
		}
	}
}

function funcs() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'s';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'S';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'S';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'s';
		}
	}
}

function funcd() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'d';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'D';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'D';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'d';
		}
	}
}

function funcf() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'f';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'F';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'F';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'f';
		}
	}
}

function funcg() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'g';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'G';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'G';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'g';
		}
	}
}

function funch() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'h';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'H';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'H';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'h';
		}
	}
}

function funcj() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'j';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'J';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'J';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'j';
		}
	}
}


function funck() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'k';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'K';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'K';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'k';
		}
	}
}

function funcl() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'l';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'L';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'L';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'l';
		}
	}
}


function funcz() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'z';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Z';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Z';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'z';
		}
	}
}

function funcx() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'x';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'X';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'X';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'x';
		}
	}
}

function funcc() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'c';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'C';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'C';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'c';
		}
	}
}

function funcv() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'v';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'V';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'V';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'v';
		}
	}
}

function funcb() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'b';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'B';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'B';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'b';
		}
	}
}

function funcn() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'n';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'N';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'N';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'n';
		}
	}
}

function funcm() {
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'m';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'M';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'M';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'m';
		}
	}
}

function func1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'1';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'!';
	}
}

function func2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'2';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'@';
	}
}

function func3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'3';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'#';
	}
}

function func4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'4';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'$';
	}
}

function func5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'5';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'%';
	}
}

function func6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'6';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'^';
	}
}

function func7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'7';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'&';
	}
}

function func8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'8';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'*';
	}
}

function func9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'9';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'(';
	}
}

function func0() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'0';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+')';
	}
}

function funcSc1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'`';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'~';
	}
}
function funcSc2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'_';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'-';
	}
}
function funcSc3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'[';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'{';
	}
}
function funcSc4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+']';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'}';
	}
}
function funcSc5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'\\';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'|';
	}
}
function funcSc6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+';';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+':';
	}
}
function funcSc7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+"'";
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'"';
	}
}
function funcSc8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+',';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'<';
	}
}
function funcSc9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'/';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'?';
	}
}
function funcDot() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'.';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'>';
	}
}