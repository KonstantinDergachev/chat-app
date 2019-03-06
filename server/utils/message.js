'user strict';

const generateMessage = (from, text) => {
    return {
        from,
        text,
        createAt: new Date().toLocaleTimeString().split(' ')[0],
      };
    };
    
    const generateLocationMessage = (from, latitude, longitude) => {
      return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createAt: new Date().toLocaleTimeString().split(' ')[0],
    };
};

module.exports = { generateMessage, generateLocationMessage };