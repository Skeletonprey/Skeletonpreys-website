const tags = document.querySelectorAll('[data-tab-target]')

tabs.forEach('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    target.classlist.add('active')
})