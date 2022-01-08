export const pubSub = {
    eventsAggregator: [],
    subscribe : function(eventName, eventHandler){
        if(this.eventsAggregator.length != 0 && this.eventsAggregator.some(event => event.name == eventName))
            this.eventsAggregator.filter(event => event.name == eventName)[0].handlers.push(eventHandler);
        else{
            this.eventsAggregator.push({
                name: eventName,
                handlers: [eventHandler],
            })
        }
    },
    publish : function(eventName){
        this.eventsAggregator.filter(event => event.name == eventName)[0].handlers.forEach(handler => handler([... arguments].slice(1)));
    },

};