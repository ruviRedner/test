//object
let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };

  //missoin1
  function missoin1(military) {
       const chifOfStafphone = military.commandStructure.chiefOfStaff.contact.phone
       const chiefOfStaffName = militaryUnit.commandStructure.chiefOfStaff.name
       const chiefOfStaffRank = militaryUnit.commandStructure.chiefOfStaff.rank
       
       return `this is the chif of staf : name:${chiefOfStaffName} , rank : ${chiefOfStaffRank} , phone number: ${chifOfStafphone}`   
    }
  console.log(missoin1(militaryUnit))

  //mission2
  function mission2(military){
           return `number of personal:${military.personnel.length}`
  }
  console.log(mission2(militaryUnit))

  //mission3
  function mission3(newDeploment,military) {
           military.history.push({
              eventDate: military.currentDeployment.startDate,
              eventDescription:`Deploment to ${military.currentDeployment.location} for mission ${military.currentDeployment.mission}`
            })
            military.currentDeployment = newDeploment
            
            return JSON.stringify(military,null,2)
          
    
  }
  console.log(mission3({location:"ftu",mission:"ftfy",startDate:"01-09-24",establishmentDate:"09-08-25"},militaryUnit))

  //mission4
  function mission4(newWeapon ,military){ 
      const exsistinWeapon = military.equipment.firearms.find(f => f.type == newWeapon.type && f.status == newWeapon.status)
            exsistinWeapon == true ? exsistinWeapon.quantity += 1 : military.equipment.firearms.push(newWeapon)
            return JSON.stringify(military,null,2)    
    }
    console.log(mission4({type:"m17",quantity:"1",status:"gfgfgu"},militaryUnit));

    //mission5
    function mission5(military) {
       const lengthTraining = military.trainingPrograms.reduce((sum,p) => sum + p.duration,0)
       return `total training duration:${lengthTraining}`   
    }
    console.log(mission5(militaryUnit));

    Module.exports= {
      missoin1,
      mission2,
      mission3,
      mission4,
      mission5
    }
    
      
  