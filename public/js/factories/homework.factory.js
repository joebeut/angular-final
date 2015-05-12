app.factory('HomeworkListFactory', function ($http) {

    return {

        getHomework: function () {

            var data = 
            [{
                assignment: 'Test First JavaScript',
                url: 'https://github.com/joebeut/FullstackTestFirst',
                status: 'completed'
            },
            {
                assignment: 'Angular Day 1',
                url: 'https://github.com/joebeut/flash-card-1',
                status: 'completed'
            },
            {
                assignment: 'Angular Day 2',
                url: 'https://github.com/joebeut/flash-card-2',
                status: 'completed'
            },
            {
                assignment: 'Angular Day 3',
                url: 'https://github.com/joebeut/flash-card-2',
                status: 'completed'
            }];

            return data;

        }

    };

});