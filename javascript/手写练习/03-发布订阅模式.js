class PubSub {
  constructor() {
      // 维护事件及订阅行为
      this.events = {}
  }
  /**
   * 注册事件订阅行为
   * @param {String} type 事件类型
   * @param {Function} cb 回调函数
   */
  subscribe(type, cb) {
      if (!this.events[type]) {
          this.events[type] = []
      }
      this.events[type].push(cb)
  }
  /**
   * 发布事件
   * @param {String} type 事件类型
   * @param  {...any} args 参数列表
   */
  publish(type, ...args) {
      if (this.events[type]) {
          this.events[type].forEach(cb => {
              cb(...args)
          })
      }
  }
  /**
   * 移除某个事件的一个订阅行为
   * @param {String} type 事件类型
   * @param {Function} cb 回调函数
   */
  unsubscribe(type, cb) {
      if (this.events[type]) {
          const targetIndex = this.events[type].findIndex(item => item === cb)
          if (targetIndex !== -1) {
              this.events[type].splice(targetIndex, 1)
          }
          if (this.events[type].length === 0) {
              delete this.events[type]
          }
      }
  }
  /**
   * 移除某个事件的所有订阅行为
   * @param {String} type 事件类型
   */
  unsubscribeAll(type) {
      if (this.events[type]) {
          delete this.events[type]
      }
  }
}

let pubsub = new PubSub();

// 弟子一订阅战斗任务
pubsub.subscribe('warTask', function (taskInfo){
    console.log("宗门殿发布战斗任务，任务信息:" + taskInfo);
})
// 弟子一订阅战斗任务
pubsub.subscribe('routeTask', function (taskInfo) {
    console.log("宗门殿发布日常任务，任务信息:" + taskInfo);
});
// 弟子三订阅全类型任务
pubsub.subscribe('allTask', function (taskInfo) {
    console.log("宗门殿发布五星任务，任务信息:" + taskInfo);
});

// 发布战斗任务
pubsub.publish('warTask', "猎杀时刻");
pubsub.publish('allTask', "猎杀时刻");

// 发布日常任务
pubsub.publish('routeTask', "种树浇水");
pubsub.publish('allTask', "种树浇水");