package com.aa.act.interview.org;

import java.util.Optional;

public abstract class Organization {

    private Position root;
    
    public Organization() {
        root = createOrganization();
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
        Optional<Position> position = findPositionbyTitle(root,title); // We would want to initialize the position
        if(position.isPresent()){                                      //
            Position foundPosition = position.get();
            if (!foundPosition.isFilled()){
                Employee employee = new Employee(makeIdentifier(), person);
                foundPosition.setEmployee(Optional.of(employee));
                return Optional.of(foundPosition);
            }
        }
        return Optional.empty();
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


    private int makeIdentifier(){ //Identifier with adding a number value 
        return 0;
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
