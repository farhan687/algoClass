/*
Trie

(Insert and Search)
Trie is an efficient information reTrieval data structure.
Using Trie, search complexities can be brought to optimal limit (key length).
If we store keys in binary search tree,
a well balanced BST will need time proportional to M * log N, where M is maximum string length and N is number of keys in tree.
Using Trie, we can search the key in O(M) time. However the penalty is on Trie storage requirements.

Basics:
- Store the word as tree
      root
      /  \
      t   f
      |   |
      h   o
      |   |
      e   r
    / |   | \
  $   r   m   $
      |   |
      e   $
      |
      $


*** Operations:

trie.insert(word)
=> trieNode (return for chaining purposes)
Break the word into characters and store it as tree.

trie.search(word)
=> true/false
Return true if word is in tree, false if not

trie.delete(word)
=> trieNode (return for chaining purposes)
Return true if word is in tree, false if not

*/

function TrieNode(value) {
	this.value = value;
  this.children = {};
  this.isEnd = false;
}

function Trie() {
	this.rootNode = new TrieNode();
}

Trie.prototype.insert = function(word) {
	var node = this.rootNode;
  for (var index = 0; index < word.length; index++) {
  	if (node.children[word[index]]) {
    	node = node.children[word[index]];
    } else {
    	var newNode = new TrieNode(word[index]);
    	node.children[word[index]] = newNode;
      node = newNode;
    }
  }
  node.isEnd = true;
  return this.rootNode;
}

Trie.prototype.search = function(word) {
	var node = this.rootNode;
  for (var index = 0; index < word.length; index++) {
  		if (node.children[word[index]]) {
    		node = node.children[word[index]];
      } else {
      	return false;
      }
    }
  if (node.isEnd) 
  	return true;
  return false;
}

Trie.prototype.delete = function() {
  var node = this.rootNode;
  var nodeRefs = [node];
  for (var index = 0; index < word.length; index++) {
    if (node.children[word[index]]) {
      node = node.children[word[index]];
      nodeRefs.unshift(node);
    } else {
      return "Not Found";
    }
  }
  if (node.isEnd) {
    for (var index = 0; index < nodeRefs.length - 1; index++) {
      var currentNode = nodeRefs[index];
      if (Object.keys(currentNode.children).length === 0) {
        delete nodeRefs[index+1].children[currentNode.value];
      }
    }
  }
  else {
    return 'Not found!';
  }
  return this.rootNode;
}


var inputs = ['the', 'there', 'for', 'fox', 'tiger', 'fame', 'tri', 'tired'];

var trie = new Trie();
inputs.forEach((input) => {
	trie.insert(input);
});

console.log('Search the: ' + trie.search('the'));
console.log('Search for: ' + trie.search('for'));
console.log('Search fox: ' + trie.search('fox'));
console.log('Search form: ' + trie.search('form'));
trie.delete('for');
console.log('Search for: ' + trie.search('for'));
console.log('Search fox: ' + trie.search('fox'));