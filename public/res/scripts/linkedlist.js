//My linked list

LinkedList = function(){
	this.length = 0;
	this.prehead = new Node();

	Node = function(object){
		this.data = object || null;
		this.next = null;

	}

	this.get = function(position){
		return getNode(position).data;
	}
	this.getNode = function(position){
		if(position>=length){
			return null;
		}
		var current = prehead;
		for(int x=-1;x<position;x++){
			current = current.next;
		}
		return current;
	}

	this.add = function(object, position){
		position = position || 0;
		if(position>this.length || position<-1){
			return null;
		}else{
			var tmp = new Node(object);
			tmp.next = getNode(position-1).next;
			getNode(position-1).next = n;
			this.length++;
		}
	}

	this.remove = function(position){
		if(position>=this.length || position<0){
			return null;
		}else if(position == length-1){
			getNode(position-1).next=null;
		}else{
			getNode(position-1).next=getNode(position+1));
			this.length--;
		}
	}

	this.find = function(object){
		try{
			int currentPlace = 0;
			while(true){
				if(get(currentPlace)===object){
					return currentPlace;
				}else{
					currentPlace++;
				}
			}
		} catch (err) {
			return -1;
		}
	}

	this.set = function(position, object){
		getNode(position).data = object;
	}

}