class node{
    constructor(data){
	this.data=data;
	this.butt=null;
    }
}
class full_list{
    constructor(){
	this.head=null;
	this.size=0;
    }
    add(elmt){
	let a=new node(elmt);
	let current;

	if(this.head==null){
	    this.head=a;
	}
	else{
	    current=this.head;
	    while(current.butt){
		current=current.butt;
	    }
	    current.butt=a;
	}
	this.size++;
    }
    add_at(elmt, index){
	if(index<0 || index>this.size){
	    console.log("No se pueden colocar elementos en esta fila");
	}
	else{
	    let n=new node(elmt);
	    let curr, prev;

	    if(index==0){
		n.butt=this.head;
		this.head=n;
	    }
	    else{
		curr=this.head;
		let it=0;

		while(it<index){
		    ++it;
		    prev=curr;
		    curr=curr.butt;
		}

		n.butt=curr;
		prev.butt=n;
	    }
	    this.size++;
	}
    }
    del_from(index){
	if(index<0 || index>=this.size){
	    console.log("No se pueden colocar elementos en esta fila");
	}
	else{
	    let curr, prev, it=0;

	    curr=this.head;
	    prev=curr;
	    if(index==0){
		this.head=curr.butt;
	    }
	    else{
		while(it<index){
		    ++it;
		    prev=curr;
		    curr=curr.butt;
		}
		prev.butt=curr.butt;
	    }
	    this.size--;
	    return curr.data;
	}
    }
    del_elmt(elmt){
	let curr=this.head, prev=null;

	while(curr!=null){
	    if(curr.data===elmt){
		if(prev==null){
		    this.head=curr.butt;
		}
		else{
		    prev.butt=curr.butt;
		}
		this.size--;
		return curr.data;
	    }
	    prev=curr;
	    curr=curr.butt;
	}
	return -1;
    }
    indexOf(elmt){
	let count=0;
	let current=this.head;
	
        while(current!=null){
            if(current.data===elmt){
                return count;
	    }
	    count++;
            current=current.butt;
        }
        return -1;
    }
    isEmpty(){
        return this.size == 0;
    }
    size_of_list(){
        console.log(this.size);
    }
    printList() {
        let curr=this.head;
        let str="";
        while(curr){
            str+=curr.data+" ";
	    //console.log(curr.elmt+"  ");
            curr=curr.butt;
        }
        console.log(str);
    }
 
}
