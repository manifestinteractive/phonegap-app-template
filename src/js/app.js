var app = {
    timeout: {},
    platform: (typeof device !== 'undefined') ? device.platform : 'desktop',
    initialized: false,
    online: false,
	tour_given: false
};