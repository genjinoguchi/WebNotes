//My linked list

LinkedList = function(length, prehead){
	this.length = 0;
	this.prehead = Node(null);
	
	this.Node = function(data){
		this.data = data || null;
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
		for(var x=-1;x<position;x++){
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
			tmp.next = this.getNode(position-1).next;
			this.getNode(position-1).next = n;
			this.length++;
		}
	}

	this.remove = function(position){
		if(position>=this.length || position<0){
			return null;
		}else if(position == length-1){
			this.getNode(position-1).next=null;
		}else{
			this.getNode(position-1).next=this.getNode(position+1);
			this.length--;
		}
	}

	this.find = function(object){
		try{
			var currentPlace = 0;
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
		this.getNode(position).data = object;
	}

}

