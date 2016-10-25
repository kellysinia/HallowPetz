/**
 * Created by quget on 11-10-16.
 */
class PumpkinEgg extends Pet
{
    constructor(map,width,height)
    {
        super(map,width,height);
        this.petId = 0;
        //Standard Egg stuff here
        this.hatchTimeMinutes = 0.5;
        this.OnPumpkinHatch = new Event('onpumpkinhatch');
        this.loader = new THREE.TextureLoader();
        this.isHatching = false;
        this.clicksToHatch = 25;
        //
    }
    Update(camera)
    {
        super.Update(camera);
        //this.TimedHatching();
        this.ClickHatching();
    }
    ClickHatching()
    {
        if(this.isHatching == false)
        {
            if(this.timesClicked == this.clicksToHatch)
            {
                document.dispatchEvent(this.OnPumpkinHatch);
                this.isHatching = true;
            }
        }
    }
    TimedHatching()
    {
        var date = new Date();
        var diffrence = date.getTime() - this.creationDate;
        diffrence = (diffrence/1000)/60;//minutes
        if(diffrence >= this.hatchTimeMinutes)
        {
            document.dispatchEvent(this.OnPumpkinHatch);
        }

    }
    //Don't call it in here. We don't need a pet in a pet.
    Hatch(petId,map)
    {
        var map = this.loader.load("assets/textures/pumpkin.png");
        var newPet = new PumpkinEgg(map,1,2);
        switch(petId)
        {
            case '0':
                break;
            case '1':
                map = this.loader.load("assets/textures/ghost_test.png");
                newPet = new Ghost(map,1,2);
                break;
            case '2':
                map = this.loader.load("assets/textures/zombie.png");
                newPet = new Zombie(map,1,2);
                break;
            case '3':
                map = this.loader.load("assets/textures/skalet.png");
                newPet = new Skeleton(map,1,2);
                break;
            default:
                break;
        }
        newPet.timesClicked = this.timesClicked;
        newPet.name = this.name;
        newPet.creationDate = this.creationDate;
        return newPet;
    }
}