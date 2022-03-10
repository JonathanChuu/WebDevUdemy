function houseKeepers (name, yearsOfExperience, hotelsWorked) {
    this.name = name
    this.yearsOfExperience = yearsOfExperience
    this.hotelsWorked = hotelsWorked
    this.clean = function () {
        alert('cleaning in progress')
    }
}

houseKeepers('monica', 5, 'the gardeen')

