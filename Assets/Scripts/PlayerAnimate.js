#pragma strict


function Update () {
	var AT = gameObject.GetComponent(AnimateTexture);
	if(Input.GetKey("a")){
		AT.rowNumber = 1;
	}
	else if(Input.GetKey("d")){
		AT.rowNumber = 1;
	}else{
		AT.rowNumber = 0;
	}
}