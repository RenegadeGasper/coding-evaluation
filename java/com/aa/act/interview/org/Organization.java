package com.aa.act.interview.org;

import java.util.Optional;

public abstract class Organization {

    private Position root;
    private int indexCounter;
    
    public Organization() {
        root = createOrganization();
        indexCounter = 1;
    }
    
    protected abstract Position createOrganization();
    
    /**
     * hire the given person as an employee in the position that has that title
     * 
     * @param person
     * @param title
     * @return the newly filled position or empty if no position has that title
     */
    public Optional<Position> hire(Name person, String title) {
        //your code here
        Optional<Position> position = findPositionbyTitle(root,title);
        if(position.isPresent()){
            Position foundPosition = position.get();
            if (!foundPosition.isFilled()){
                int counter = index();
                Employee employee = new Employee(counter, person);
                foundPosition.setEmployee(Optional.of(employee));
                return Optional.of(foundPosition);
            }
        }
        /*
        Hire Method would require the Position and the name from the other classes
        We would need to:
          1. Check if they have a position, if so then we continue
          2. Apply the employee value with a counter (probably incremental based on input)
          3. Return the position and value of the employee (if not, return Optional.empty())
        * */

        return Optional.empty();
    }

    private int index(){        // We would just need an index where each  input will apply the position of each
        return indexCounter++;  // We could implement something more different but in terms of argument we just want it to be incremental
    }

    private Optional<Position> findPositionbyTitle(Position position, String title){
        if (position.getTitle().equals(title)){
            return Optional.of(position);
        }

        for (Position directReport : position.getDirectReports()){
            Optional<Position> foundPosition = findPositionbyTitle(directReport, title);
            if(foundPosition.isPresent()){
                return foundPosition;
            }
        }
        return Optional.empty();
    }


    @Override
    public String toString() {
        return printOrganization(root, "");
    }
    
    private String printOrganization(Position pos, String prefix) {
        StringBuffer sb = new StringBuffer(prefix + "+-" + pos.toString() + "\n");
        for(Position p : pos.getDirectReports()) {
            sb.append(printOrganization(p, prefix + "  "));
        }
        return sb.toString();
    }
}
