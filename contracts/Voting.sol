// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./USN.sol";

contract Voting {

    bool public VotingPhase;
    address public Owner;
    address immutable _USN;

    struct Candidate {
        string name;
        address addr;
        uint VoteCount;
    }

    address public PastWinner;

    mapping(address => bool)[] public voted;  // mapping initialization


    Candidate[] public Candidates;
    uint public CandidateCount;
    uint public usingMap ;
    

    modifier OnlyOwnable {
        require(Owner == msg.sender , "u no owner");
        _;
    }
    
    constructor(address __USN) {
        Owner = msg.sender;
        voted.push();
        voted.push();
        _USN = __USN;
    }

    function addCadidate(string memory _name) public payable{
        require(VotingPhase , "Voting Not STARTED");
        require(!voted[usingMap + 1][msg.sender] , "U already enrolled");
        voted[usingMap + 1][msg.sender] = true;
        Candidates.push(Candidate(_name ,msg.sender, 0));
        CandidateCount++;
        // vote(0);    //delete
    }

    function vote(uint _num  ) public {
        uint  USNBal;
        USN contr = USN(_USN);
        USNBal = contr.totalSupply();
        require(USNBal > 1 , "USN bal NO there");
        require(VotingPhase , "Voting Not STARTED");
        require(!voted[usingMap][msg.sender] , "Cant Vote Another");
        require(_num <= CandidateCount && _num >= 0 , "Invalid Cadidate");
        voted[usingMap ][msg.sender] = true;
        Candidates[_num].VoteCount++;
    }

    function StartVoting() public OnlyOwnable {
        VotingPhase = true;
        addCadidate("Jayzz");
    }


    function EndVoting() public OnlyOwnable {

        VotingPhase = false;                                //
        require(CandidateCount > 0 , "No cadids")  ;                                                 //
        uint Maxvotes = Candidates[0].VoteCount;            //                                                                                                                                                                                                                   
        PastWinner = Candidates[0].addr;                    //                                                                                                                                                                                                           
                                                            //
        for (uint i = 1;i <= CandidateCount - 1 ; i++) {        //                                                                                                                                                                                                                      
            if (Candidates[i].VoteCount > Maxvotes) { 
                Maxvotes =  Candidates[i].VoteCount;                                                                                                                                                                                                
                PastWinner = Candidates[i].addr;            //                                                                                                                                                                                                                  
            }
        }

        delete Candidates;
        CandidateCount = 0;
        usingMap = usingMap + 2;
        voted.push();
        voted.push();
        
        
    }
    receive() external payable {}
}