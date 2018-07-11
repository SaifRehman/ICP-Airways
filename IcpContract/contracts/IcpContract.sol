//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.4.18;
contract JsonStore {
    function set(string _value) public {
        value = _value;
    }
    function get() public constant returns (string) {
        return value;
    }

    string value;
}