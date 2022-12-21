const { I } = inject();

module.exports = {

  order: { xpath: '//*[@id="content"]/div[1]/table/tbody/tr[1]/td[1]' },

  async getOrderNumber() {
    return await I.grabTextFrom(this.order)
  },
}
