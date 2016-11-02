/**
 * Created by quget on 1-11-16.
 */
class Settings
{
    constructor()
    {
        this.sfxMuted = false;
        this.bgmMuted = false;
        this.ambMuted = false;
    }
    Load()
    {
        //this.sfxMuted = qUtils.GetCookie("hellowPetz_sfx");
        //this.bgmMuted = qUtils.GetCookie("hellowPetz_bgm");
        var sfx = qUtils.GetCookie("hellowPetz_sfx");
        if(sfx == 'true')
        {
            this.sfxMuted = true;
        }
        else
        {
            this.sfxMuted = false;
        }
        var bgm = qUtils.GetCookie("hellowPetz_bgm");
        if(bgm == 'true')
        {
            this.bgmMuted = true;
        }
        else
        {
            this.bgmMuted = false;
        }
        var amb = qUtils.GetCookie("hellowPetz_amb");
        if(amb == 'true')
        {
            this.ambMuted = true;
        }
        else
        {
            this.ambMuted = false;
        }
    }
    Save()
    {
        qUtils.SetCookie("hellowPetz_sfx",this.sfxMuted.toString());
        qUtils.SetCookie("hellowPetz_bgm",this.bgmMuted.toString());
        qUtils.SetCookie("hellowPetz_amb",this.ambMuted.toString());
    }
}
let settings = new Settings();