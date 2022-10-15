module.exports = {
    app: {
        token: 'MTAzMDY4MjIwMTAzNTExMjUyOA.GjXNvo.tdNEDo6_V-VL2wljpiYuTjLCnbWfzmPGIAkhls',
        playing: 'ฟาเดยมาแย้ววว♥!',
        global: true,
        guild: '763018726257066015'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
